let figures = document.querySelectorAll('.fig');

figures.forEach((item,key) => {
    goElement(item);
});

function goElement(element) {
    element.ondragstart = function() {
        return false;
    };
    element.onmousedown = function(event) {

        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
      
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
        document.body.append(element);
      
        moveAt(event.pageX, event.pageY);
    
        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
    
        document.addEventListener('mousemove', onMouseMove);
      
        element.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          element.onmouseup = null;
        };
      
    };
      
    
}

