function setupRoomFinal(e,a,t){gameObjects.exhibit.setBackgroundAtIndex(a,"bgs","bg4");let o=e.add.image(0,507,"buttons","exitDoorWhite");t.add(o),gameObjects.exitDoorFinal=new Button(e,t,()=>{onFinalExitClick(e)},{atlas:"buttons",ref:"exitDoorNormal",x:-210,y:507},{atlas:"buttons",ref:"exitDoorOver"},{atlas:"buttons",ref:"exitDoorOver"},{atlas:"buttons",ref:"exitDoorNormal"}),gameObjects.exitDoorFinal.setOrigin(0,.5)}function onFinalExitClick(e){gameObjects.exitDoorFinal.setState("disable"),setTimeout(()=>{playSound("dooropen2")},50),e.tweens.add({targets:e.cameras.main,zoom:4.1,ease:"Quad.easeIn",duration:6250,onComplete:()=>{e.cameras.main.setZoom(1);let a=e.add.image(0,gameVars.halfHeight,"misc","scrollworld");a.x=gameVars.width-.5*a.width,a.y=.5*a.height;let t=e.add.image(gameVars.halfWidth,gameVars.halfHeight,"whitePixel");t.scaleX=1e3,t.scaleY=800,e.tweens.add({targets:t,alpha:0,duration:2200}),e.tweens.add({targets:t,scaleX:t.scaleX+1,duration:2400,onComplete:()=>{runEpilogue(a)}}),e.tweens.add({targets:a,y:a.y-(a.height-gameVars.height),duration:25e3})}}),gameObjects.exitDoorFinal.tweenScale({scaleX:.96,duration:100,ease:"Cubic.easeOut",onComplete:()=>{gameObjects.exitDoorFinal.tweenScale({scaleX:.2,duration:5e3,ease:"Cubic.easeIn",onComplete:()=>{gameObjects.exitDoorFinal.tweenScale({scaleX:.15,duration:500,ease:"Cubic.easeOut",onComplete:()=>{}})}})}})}function runEpilogue(e){let a=globalScene.add.image(gameVars.halfWidth+95,450,"roomClown","clowndoor"),t=globalScene.add.image(gameVars.halfWidth-1200,457,"buttons","exitDoorOpenSurround"),o=globalScene.add.image(gameVars.halfWidth+40,565,"roomClown","clownhand");a.scaleX=-.3,a.scaleY=.72,a.rotation=-.9,a.visible=!1,o.visible=!1;let n=globalScene.add.image(gameVars.halfWidth+100,774,"buttons","musicBox");n.visible=!1;let l=globalScene.add.image(gameVars.halfWidth-1200+200,507,"buttons","exitDoorNormal");l.setOrigin(0,.5),l.scaleX=-.6,globalScene.tweens.add({targets:e,x:e.x+1200,ease:"Cubic.easeInOut",duration:3200}),globalScene.tweens.add({targets:[l,t],x:"+=1200",ease:"Cubic.easeInOut",duration:3200,onComplete:()=>{a.visible=!0,o.visible=!0,globalScene.tweens.add({targets:a,x:"-=125",scaleX:-.71,ease:"Cubic.easeOut",duration:1e3,onComplete:()=>{gameObjectsTemp.boxBroken||(n.visible=!0,globalScene.tweens.add({targets:[n],x:"-=350",ease:"Cubic.easeOut",duration:1e3,onComplete:()=>{playSound("g6")}})),globalScene.tweens.add({targets:o,rotation:-.25,yoyo:!0,ease:"Sine.easeInOut",duration:400,repeat:1,onComplete:()=>{globalScene.tweens.add({targets:[o,a],scaleX:"-=0.1",x:"+=65",ease:"Cubic.easeIn",duration:350}),globalScene.tweens.add({targets:l,scaleX:-1,ease:"Quad.easeIn",duration:350,onComplete:()=>{playSound("doorslam"),zoomTemp(1.04),showStaticLite(6,25,4,1),globalScene.add.image(gameVars.halfWidth,gameVars.halfHeight,"theEnd"),setTimeout(()=>{let e=globalScene.add.image(gameVars.halfWidth,gameVars.halfHeight,"blackPixel");e.scaleX=999,e.scaleY=999,gameObjectsTemp.endText=globalScene.add.text(100,80,"Game by Maxim Tsai",{fontFamily:"Times New Roman",fontSize:30,color:"#ffffff",align:"left"}),gameObjectsTemp.endText.alpha=0,globalScene.tweens.add({targets:gameObjectsTemp.endText,alpha:1,duration:1e3,delay:500,onComplete:()=>{gameObjectsTemp.endText2=globalScene.add.text(100,140,"Art by Theresa Kao",{fontFamily:"Times New Roman",fontSize:30,color:"#ffffff",align:"left"}),gameObjectsTemp.endText2.alpha=0,globalScene.tweens.add({targets:gameObjectsTemp.endText2,alpha:1,duration:1e3,delay:750,onComplete:()=>{gameObjectsTemp.endText3=globalScene.add.text(100,200,"Special Helpers: @hby_stuff, Ester Tsai, Yuan Lin, Peikun Tsai",{fontFamily:"Times New Roman",fontSize:30,color:"#ffffff",align:"left"}),gameObjectsTemp.endText3.alpha=0,globalScene.tweens.add({targets:gameObjectsTemp.endText3,alpha:1,duration:1e3,delay:750,onComplete:()=>{let e="Random game trivia:\n\n";e+="- Engine used: Phaser 3\n",e+="- Development Time: 4 months\n",e+="- Number of Image Files: ~320\n",e+="- Trickiest thing to draw: Jack in the Box's neck\n",gameObjectsTemp.endText5=globalScene.add.text(100,380,"Random game trivia:\n\n- Engine used: Phaser 3\n- Development Time: 4 months\n- Number of Image Files: ~320\n- Trickiest thing to draw: Jack in the Box's neck\n",{fontFamily:"Times New Roman",fontSize:26,color:"#ffffff",align:"left"}),gameObjectsTemp.endText5.setOrigin(0,.5),gameObjectsTemp.endText5.alpha=0,globalScene.tweens.add({targets:gameObjectsTemp.endText5,alpha:1,duration:1e3,delay:1250,onComplete:()=>{gameObjectsTemp.lastText=globalScene.add.text(gameVars.halfWidth,gameVars.height-200,"Thank you for playing",{fontFamily:"Times New Roman",fontSize:48,color:"#ffffff",align:"center"}),gameObjectsTemp.lastText.setOrigin(.5,.5),gameObjectsTemp.lastText.alpha=0,globalScene.tweens.add({targets:gameObjectsTemp.lastText,alpha:1,duration:2500,delay:4500,onComplete:()=>{gameObjectsTemp.dText=globalScene.add.text(gameVars.width-25,gameVars.height-50,"Donations accepted at adayofjoy.itch.io/exhibit-of-sorrows :D",{fontFamily:"Times New Roman",fontSize:16,color:"#ffffff",align:"right"}),gameObjectsTemp.dText.setOrigin(1,.5),gameObjectsTemp.dText.alpha=.3}})}})}})}})}}),gameObjectsTemp.boxBroken?tweenVolume("gladiatorx",.6):(playSound("gladiator0"),gameObjects.sounds.gladiator0.volume=1)},325)}})}})}}),globalScene.tweens.add({targets:[o],x:"-=130",ease:"Cubic.easeOut",duration:1250})}})}