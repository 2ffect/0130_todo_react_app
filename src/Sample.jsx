import React from "react"


// react에서 컴포넌트 클래스를 만들기 위해 Componenet로 부터 상속 받기
class Sample extends React.Component {
    // render는 화면에 출력할 내용을 리턴하는 메서드
    render(){
        return(
            <div className = "Sample">
                <p>안녕하세요옹~ 반가워용~ </p>
                <p>1분단 삼촌입니다~~</p>
            </div>
        )
    }
}

export default Sample