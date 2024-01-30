import React from "react"
import{
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
} from "@material-ui/core"


// react에서 컴포넌트 클래스를 만들기 위해 Componenet로 부터 상속 받기
class ToDo extends React.Component {
    // 생성자 생성
    constructor(props){
        // App.js에서 넘겨 준 속성들을 자신의 props에 저장
        super(props); // 상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        // state 생성
        // props 중 item 이라는 값을 state로 저장
        // props 는 상위 컴포넌트(현재는 App.js)로 부터 받은 데이터라 
        // 읽기는 가능하지만 수정이 불가능하다.
        // 따라서 수정, 삭제를 하고자 할때 state 로 변환해주어야 한다.
        this.state = {item:props.item}
    }

    // render는 화면에 출력할 내용을 리턴하는 메서드
    render(){
        // 자주 사용하는 데이터코드를 짧게 작성하기 위해 다른 변수에 대입
        const item = this.state.item
        return(
            <ListItem>
                <Checkbox check = {item.done} />
            <ListItemText>
                <InputBase
                    inputProps = {{"aria-label" : "naked"}}
                    type = "text"
                    id = {item.id}
                    name = {item.id}
                    value = {item.title}
                    multiline = {true}
                    fullWidth = {true}
                />
            </ListItemText>
            </ListItem>
            // <div className = "ToDo">
            //     <input type = "checkbox" 
            //         id = {this.state.item.id}        // state 를 사용 item 안의 id를 사용하겠다.  꼭 {} 안에 작성한다.
            //         name = {this.state.item.id}     
            //         check = {this.state.item.done}/>
            //     <label id = {this.state.item.id}> {this.state.item.title} </label> 
            // </div> // item.id, done, title을 사용하기 위해서는 상위 컴포넌트에서 
            //        // id, done, title이 포함된 item이라는 props를 생성해야 한다.
        )
    }
}

export default ToDo