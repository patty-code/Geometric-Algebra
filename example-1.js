//PGA(2,0,1)'s construction of geometric objects
Algebra(2,0,1,
        ()=>{
            var scale =.001
            var x = scale
            var y = scale-.01
            var a = scale-.02
            var b = scale+.1
            var c = scale

            
            //Geometry
            
            //--Point, Lines:
            //----Euclidean point at (x,y)
            var Euclpt    = (x,y)=>x*1e20+y*1e01+1e12  
            //----Direction(ideal point)(x,y)
            var Idealpt   = (x,y)=>x*1e20+y*1e01
            //----Line with eq. ax+by+c=0
            var lineframe = (a,b,c)=>a*1e1+b*1e2+c*1e0
            
            //--Incidence Relation:
            //----Join point P1, P2 in line l
            //----Find line that connect 2 points
            var P1 = Euclpt(x+1.8,y-.1)
            var P2 = Euclpt(x-.5,y+.2)
            var l = P1&P2
            //----Meet lines l1, l2 in point P 
            //----Find where two lines intercept
            var P3 = Euclpt(x+.6,y-1)
            var P4 = Euclpt(x-.6,y+2)
            var l1 = P3&P4
            var P = l^l1
            var join3pts = P1&P2&P3
            //----Draw triangle with 3 points
            var triangle = [P1,P2,P3]
            
            //--Project, Reject:
            //----Line orthogonal to line l, through point P
            //----Find orthogonal line to another line
            var m  = l<<P
            //----Project point P on line l, yields a point
            //----Find a projected point on a line
            var ProjPointtol = (l<<P3)*l
            //----Project line on a point, yields a line
            //----Find a line projected onto a point
            var projlinetoP = (l1<<P2)*P2   //eqv. translation of l1
            //----Direction orthogonal to a line l
            var I = 1e012
            var orthogonaldirec = l*I
            
            //--Metric
            //----Distances and angles
            //----Find distance between two points
            var Pi = P3
            var Pj = P2
            var distpoints = (Pi,Pj)=>(Pi.Normalized&Pj.Normalized).Length
            var distancePoints = distpoints(Pi,Pj)
            //----Finds distance between a line and a point
            var li = l
            var lj = l1
            var distlinetopt = (Pi,li)=>((Pi.Normalized)^(li.Normalized)).e012
            var distancelinepoint= distlinetopt(Pi,li) 
            //---Find the |lenght| of a line segment betwenn two points
            var Pi = P3
            var Pj = ProjPointtol
            var segment = [Pi,Pj]
            var segmentlenghtfunc = (Pi,Pj)=>(Pi.Normalized&Pj.Normalized).Length
            var segmentlenght = segmentlenghtfunc(Pi,Pj) 
            //----Find the angle between two lines
            var angleBetweenlines = (li,lj)=>(li.Normalized<<lj.Normalized).s 
            //  here 's' refers to the signature, sign, defines in line 96 in:
            //  https://github.com/enkimute/ganja.js/blob/44db8aa4439d529565a3c3d73dd462be3e2a4c5c/ganja.js
            var anglelines = angleBetweenlines(li,lj)
           
            
            //--Motions and Transformations
            //----Rotor
            var alpha = .5
            //  here "Alpha is the ratio of PI/2 rotaions of the object about P
            var rotor = (alpha, Pi)=>Math.cos(alpha*Math.PI/2)+Math.sin(alpha*Math.PI/2)*P
            var rotorvaluedline = rotor(alpha,Pi)*l
            //----Translator
            var transconstant = 200
            var translator = (x,y)=>1+transconstant*(x*1e20-y*1e01)
            //----Translate a point
            var translatorvaluedpoint = translator(x,y)*P3
            //----Translate a point
            var translatorvaluedline = translator(x,y)*rotorvaluedline
          

    //TEXT DOCUMENT
            document.body.innerHTML +=
            `<PRE>
            distance between Pi and Pj = ${distancePoints.toFixed(2)}
            distance between li and Pi = ${distancelinepoint.toFixed(2)}
            angle between two lines = ${anglelines.toFixed(2)}
            </PRE>` 
            
            
    // GRAPH
            document.body.appendChild(this.graph(
            [
          
            //0xAD4404,
            // Euclpt(x+.7,y+.7),"Euclidean Point",
            // Idealpt(x-.02,y-.3),"Direction(ideal point)",
            //lineframe(a,b,c),"line frame",
           
            0xE5E6E6,
            triangle,
            
            0x6CA4CE,
            P1,"P1",
            P2,"P2",
            l,"l",
            P,"P",
           
            0x968E83,
            P3,"P3",
            P4,"P4",
            l1,"l1",  
           
            0xB48C0F,
            m,"m:&ensp; m &perp; l",
            
            0xBCD0DE,
            ProjPointtol,"P3 Projected on l",
            projlinetoP,"l1 projected on P2",
          
            // 0xB48C0F,
            // I,"I",
            // orthogonaldirec,"direction &perp; to line l",
            
            // 0xAD4404,
            // [P2,P3],distancePoints.toFixed(2),
            // P,anglelines.toFixed(2),
            
            0x362E0D,
            rotorvaluedline,"Rotatio of l",
            
            0x5D9F70,
            translatorvaluedpoint,"P3 translated",
            translatorvaluedline,"Rotation of L translated",
            
            ],
            {scale:1, grid:true}
            ))
            
            
        //CONSOLE LOG
               //
            // console.log("I")
            // console.log(I)
            // console.log("orthogonaldirec")
            // console.log(orthogonaldirec)
            // // result:-->[ 0, 0, 0, 0, 0.6000000238418579, -0.30000001192092896, 0, 0 ]
            // console.log("distance1")
            // console.log(distance1)
            // console.log("P1")
            // console.log(P1)
            // console.log("Pi")
            // console.log(Pi)
            //  //  result:--> [ 0, 0, 0, 0, -1.0089999437332153, -0.6010000109672546, 1, 0 ]
            // console.log("normalizedPi")
            // console.log(Pi.Normalized)
            //  //  result:--> [ 0, 0, 0, 0, -1.0089999437332153, -0.6010000109672546, 1, 0 ]
            // console.log("Pj") //Here Pj is the value of progjected Point to line l
            // // when Pj is P2 on line l then Pj.Normalized is same as Pj
            // console.log(Pj)
            //  //  result:--> [ 0, 0, 0, 0, -1.0089999437332153, -0.6010000109672546, 1, 0 ]
            // console.log("normalizedPj")
            // console.log(Pj.Normalized)
            //  //  result:--> [ 0, 0, 0, 0, 0.48899999260902405, 0.8610000014305115, -1, 0 ]
            
            // console.log("Rotor")
            // console.log(rotorvaluedline)
            //  result:--> [ 0.9689124226570129, 0, 0, 0, 0.07000543177127838, 0.09832824766635895, -0.3562617301940918, 0 ]
            //
            //Compare the below: when using Normalized seems to return 
            //distancinepoint as an array. Also Pj and Pj.Normalized 
            //are different while Pi, Pi.Normalized is the same ??
            // console.log('distancelinpoint')
            // console.log(distancelinepoint)
            // //result:--> -0.5813776254653931
            // console.log('distancelinpointNormalized')
            // console.log(distancelinepoint.Normalized)
            // //result:-->[ -1, 0, 0, 0, 0, 0, 0, 0 ]
            // console.log("segmentlenght")
            // console.log(segmentlenght)
            // //result:--> 0.5813776481090759
            // console.log("translatorvaluedpoint")
            // console.log(translatorvaluedpoint)
            // console.log("translatorvaluedline")
            // console.log(translatorvaluedline)
        //  
            
            
          })
          
          
        
