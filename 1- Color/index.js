var index = 0;

const changeColor = () => {
            // const generateNum=Math.random()
            var color=["red","blue","black","greens","grey"];
            document.getElementsByTagName("body")[0].style.backgroundColor=color[index++];

            if(index>color.length-1)index=0
            };
