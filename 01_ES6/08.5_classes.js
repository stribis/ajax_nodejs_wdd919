class Student {

  constructor(){
    console.log('Student has been admited to school')
  }


}

class WDD318 extends Student{

  constructor(){
    super()
    console.log('This student is part of WDD318')
  }

}

let daniel = new WDD318()
