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
            var P1 = Euclpt(x+.1,y-.1)
            var P2 = Euclpt(x-.5,y+.2)
            var l = P1&P2
            //----Meet lines l1, l2 in point P
            var P3 = Euclpt(x+.6,y-1)
            var P4 = Euclpt(x-.6,y+2)
            var l1 = P3&P4
            var P = l^l1
            
            //--Project, Reject:
            //----Line orthogonal to line l, through point P
            var m  = l<<P
            //----Project point P on line l, yields a point
            var ProjPointtol = (l<<P3)*l
            //----Project line on a point, yields a line
            var projlinetoP = (l1<<P2)*P2   //eqv. translation of l1
            //var n = P3&ProjPointtol       //eqv. translation of m      
            //----Direction orthogonal to a line l
            var I = 1e012
            var orthogonaldirec = l*I

            
            //--Metric
            //----Distances and angles
            var Pi = P1
            var Pj = P2
            var dist_points = (Pi,Pj)=>(Pi.Normalized&Pj.Normalized).Length;
            var distance1 = dist_points(Pi,Pj)
            
            
            console.log("I")
            console.log(I)
            console.log("orthogonaldirec")
            console.log(orthogonaldirec)
            console.log("distance1")
            console.log(distance1)
      

    
    
    // var dist_point_line = (P,l)=>((P.Normalized)^(l.Normalized)).e012;
    // var angle_lines     = (l1,l2)=>(l1.Normalized<<l2.Normalized).s;
            
            document.body.innerHTML +=
            `<PRE>
            distance between Pi and Pj = ${distance1.toFixed(2)}
            </PRE>` 
            
            document.body.appendChild(this.graph(
            [
          
            //0xAD4404,
            // Euclpt(x+.7,y+.7),"Euclidean Point",
            // Idealpt(x-.02,y-.3),"Direction(ideal point)",
            //lineframe(a,b,c),"line frame",
           
            0x6CA4CE,
            P1,"P1",
            P2,"P2",
            l,"l",
            P,"P",
           
            0x968E83,
            P3,"P3",
            P4,"P4",
            l1,"l1",  
            
            0x5D9F70,
            m,"m:&ensp; m &perp; l",
            0xBCD0DE,
            ProjPointtol,"Projected Point P3 to line l",
            projlinetoP,"projected line l1 to point P2, trans(l1)",
           
            0xB48C0F,
            I,"I",
            orthogonaldirec,"direction &perp; to line l",
            
            0x5D9F70,
           
            
            ],
            {scale:1, grid:true}
            ))
            
          })
        
