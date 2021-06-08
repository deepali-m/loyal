class Login{
    constructor(){
        
    
        // x = document.createElement("INPUT");

      
    this.enter=createButton("ENTER")
    this.Name1 = createInput("Enter Name")       
          
    }
    show(){
       
        
        
    console.log(gamestate)

    
        this.enter.position(900,590)
        this.enter.size(100,50)
        this.enter.style("background-color:lime")
        this.Name1.position(displayWidth/3+200,500)
        this.Name1.size(300,50)
    }
    hide(){
    this.enter.hide()
    this.Name1.hide()

    }
}