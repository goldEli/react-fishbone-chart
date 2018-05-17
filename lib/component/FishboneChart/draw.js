// import fishheadUrl from './image/fishhead.png';
// import fishtailUrl from './image/fishtail.png';
const fishheadUrl = 'data:image/png;base64,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'
const fishtailUrl = 'data:image/png;base64,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'
function imageFromPath(src) {
    return new Promise(function(resolve, reject){
        var img = new Image();
        img.src = src;
        img.onload = function() {
                resolve(img)
        }
    })
}
// draw method
function DrawMethd(chart){
    var ctx = chart.ctx;
    var o = {
        // 画点
        point: function(x,y,r,color){
            ctx.beginPath();
            ctx.fillStyle=color;
            ctx.arc(x,y,r,0,Math.PI*2,true);
            ctx.fill();
            ctx.closePath();
        },
        // 画空心
        hollowPoint: function(x,y,r,centerPointColor,pointColor) {
            ctx.beginPath();
            ctx.fillStyle=centerPointColor;
            ctx.arc(x,y,r,0,Math.PI*2,true);
            ctx.fill();
            ctx.strokeStyle=pointColor;
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(x,y,2*r,0,Math.PI*2,true);
            ctx.stroke();
            ctx.closePath();
        },
        // 画线
        line: function (startX, startY, endX, endY, color){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
        },
        // 画note
        note: function(x = 100, y = 100, type, color, text) {
            var size = 4
            ctx.beginPath();
            // 画三角
            ctx.fillStyle=color;
            ctx.moveTo(x, y);
            if (type === 'up') {
                ctx.lineTo(x-size, y-size);
                ctx.lineTo(x+size, y-size);
            } else {
                ctx.lineTo(x+size, y+size);
                ctx.lineTo(x-size, y+size);
            }
            ctx.fill();
            // 画横线
            ctx.strokeStyle=color;
            if (type === 'up') {
                ctx.moveTo(x-10*size, y-size);
                ctx.lineTo(x+10*size, y-size);
            } else {
                ctx.moveTo(x+10*size, y+size);
                ctx.lineTo(x-10*size, y+size);
            }
            ctx.stroke();
            // 画文字
            ctx.font = "12px Arial";
            if (type === 'up') {
                ctx.fillText(text,x-10*size, y-2*size);
            } else {
                ctx.fillText(text,x-10*size, y+2*size+12);
            }
            ctx.closePath();
        },
        // 画图片
        image: function(image) {
            image.then((img)=>{
                ctx.drawImage(img.img,img.posX,img.posY)
            })
        },
        // 画单个鱼骨
        fishbone: function(x,y,type,lineColor,centerPointColor,pointColor,noteColor,r,text) {
            var endY;
            var endX = x-50;
            var triangleEndY;
            if (type === 'up') {
                endY = y-100;
                triangleEndY = endY - 10
            }
            if (type === 'down') {
                endY = y+100;
                triangleEndY = endY + 10
            }
            o.line(x,y,endX,endY,lineColor)
            o.hollowPoint(x,y,r,centerPointColor,pointColor);
            o.point(endX,endY,r,pointColor);
            o.note(endX, triangleEndY, type,noteColor,text,)
        },
        fish: function(obj) {
            o.line(obj.boneStart.x,obj.boneStart.y, obj.boneEnd.x,obj.boneEnd.y, chart.color[0]);
            //draw fish fishbones
            var temp = obj.spineStart.x
            obj.data.forEach((e, i) => {
                var type = i%2 === 0 ? 'up' : 'down';
                if (obj.boneEnd.x > obj.spineStart.x) {
                    return
                }
                o.fishbone(obj.spineStart.x, obj.spineStart.y, type,chart.color[0],chart.color[2],chart.color[1],chart.color[5],chart.r,e)
                obj.spineStart.x -= obj.interval
            });
            obj.spineStart.x = temp
        }
    }
    return o
}
function Chart(container) {
    var o = {
        actions: {},
        actionTypes: {},
    };
    o.color = [
        // line color 1
        'rgb(30,100,69)',
        // point color
        'rgb(73,173,118)',
        // center point color
        'rgb(255,255,255)',
        // text color 1
        'rgb(73,173,118)',
        // text color 2
        'rgb(255,255,255)',
        // color 2
        'grey',
        'rgb(0,0,0)',
    ];
    var canvasNode = document.createElement('canvas')
    canvasNode.width = container.offsetWidth
    canvasNode.height = container.offsetHeight
    container.appendChild(canvasNode)
    container.style.background = o.color[6]
    o.canvas = canvasNode;
    o.ctx = o.canvas.getContext("2d");
    o.width = o.canvas.width;
    o.height = o.canvas.height;
    o.r = 6;
    
    o.generatorPointer = function(mousePostion, ranges) {
        if (ranges.length ===0) return;
        if (o.isMouseInRange(mousePostion, ranges)) {
            if (o.canvas.style.cursor != 'pointer') {
                o.canvas.style.cursor = 'pointer'
            }
        } else {
            if (o.canvas.style.cursor != '') {
                o.canvas.style.cursor = ''
            }
        }
    }
    o.move = function(mousePostion, ranges, key) {
        if (ranges.length === 0) return;
        if (o.isMouseInRange(mousePostion, ranges)) {
            o.actionTypes[key] = true
        } else {
            o.actionTypes[key] = false
        }
    }
    o.isMouseInRange = function(mousePostion, ranges) {
        const {clientX, clientY} = mousePostion;
        for (let i=0; i < ranges.length; ++i) {
            const range = ranges[i]
            const {sx, sy, ex, ey} = range;
            if (ex > clientX && clientX > sx && ey >clientY && clientY > sy) {
                return true
            }
        }
        return false
    }
    o.registerEvent = function(type, range, callback) {
        if (!(o.actions[type] instanceof Object)) o.actions[type] = {}
        if (!(o.actions[type].ranges instanceof Array)) o.actions[type].ranges = []
        o.actions[type].ranges.push(range)
        o.actions[type].callback = callback
        console.log(o.actions)
    }
    o.canvas.addEventListener('mousemove',function(e){
        const clientX = e.clientX - o.canvas.getBoundingClientRect().left;
        const clientY = e.clientY - o.canvas.getBoundingClientRect().top;
        o.generatorPointer({clientX, clientY}, o.actions.pointer.ranges);
        o.move({clientX, clientY}, o.actions.moveLeft.ranges, 'moveLeft');
        o.move({clientX, clientY}, o.actions.moveRight.ranges, 'moveRight');
    })

    setInterval(function(){
        o.ctx.clearRect(0, 0, o.canvas.width, o.canvas.height)
        for (let key in o.actionTypes) {
            if (o.actionTypes[key]) {
                o.actions[key].callback()
            }
        }
        o.update()
        o.draw()
    }, 1000/30)
    return o;
}
function Fish(chart, data, speed) {
    var o = {
        data: data,
        startX: chart.width - 200,
        startY: chart.height/2,
        endX: 5,
        endY: chart.height/2,
    };
    o.boneStart = {x:o.startX+100, y:o.startY};
    o.boneEnd = {x:25, y:o.endY};
    o.spineStart = {x:o.startX, y:o.startY};
    o.spineEnd = o.boneEnd;
    o.interval = 100;
    o.speed = speed ? speed : 20;
    o.moveDistance = 0;
    o.moveAllDistance = 0;
    o.allDistance = o.data.length * o.interval;
    o.allNum = o.data.length
    o.showNum = parseInt((o.spineStart.x - o.spineEnd.x)/o.interval) + 2
    o.moveNum = parseInt(o.moveAllDistance/o.interval)
    o.timer;
    o.hanleMove = function(cb) {
        if (o.moveDistance === o.interval || o.moveDistance === -o.interval) {
            if (o.timer) return;
            o.timer = setTimeout(function(){
                o.moveDistance = 0
                o.timer = null
            },500)
        } else {
            cb()
        }
    }
    o.moveRight = function() {
        o.hanleMove(function(){
            if (parseInt(o.moveAllDistance/o.interval) > (o.allNum - o.showNum)) return;
            o.spineStart.x += o.speed
            o.moveDistance += o.speed
            o.moveAllDistance += o.speed
        })
    }
    o.moveLeft = function() {
        o.hanleMove(function(){
            if (o.moveAllDistance <= 0) return;
            o.spineStart.x -= o.speed
            o.moveDistance -= o.speed
            o.moveAllDistance -= o.speed
        })
    }
    return o;
}
function FishPart(x, y, src) {
    var o = {
        img: imageFromPath(src),
        baseX: x,
        baseY: y,
    }
    return new Promise(function(resolve, reject){
        o.img.then(function(data){
            var h = data.height;
            var w = data.width;
            o.posX = o.baseX;
            o.posY = o.baseY-h/2;
            o.range = {sx: o.posX, sy: o.posY, ex: o.posX+w, ey: o.posY+h}
            o.img = data;
            resolve(o)
        })
    })
}
function __main(options){
    const {container, data, speed} = options
    var chart = Chart(container)
    var draw = DrawMethd(chart)
    var fish = Fish(chart, data, speed)
    var fishtial = FishPart(fish.endX, fish.endY, fishtailUrl)
    var fishhead = FishPart(fish.startX, fish.startY, fishheadUrl)
    fishtial.then((img)=>{
        chart.registerEvent('pointer',img.range);
        chart.registerEvent('moveLeft',img.range,function(){
            fish.moveLeft()
        });
    })
    fishhead.then((img)=>{
        chart.registerEvent('pointer',img.range);
        chart.registerEvent('moveRight',img.range,function(){
            fish.moveRight()
        });
    })
    chart.update = function() {
        // fish.move()
    }
    chart.draw = function() {
        draw.image(fishtial)
        draw.image(fishhead)
        draw.fish(fish)
    }
}

export default __main;