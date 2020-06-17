window.addEventListener("load", function(){
    var hover = {"index" : 0, "originalText": null, "interval" : null, "node" : null};
    var nodes = document.querySelectorAll(".sequenceRollover");
    nodes.forEach(function(item){
        item.addEventListener("mouseover", function(){
            if(hover.interval == null){
                hover.node = this;
                hover.originalText = this.innerText;
                hover.index = 0;
                hover.interval = setInterval(function(){
                    if(hover.index < hover.originalText.lenght){

                    }else{
                        
                    }
                },50);
            }

        });
    });
});