'use client'
 
const TestButton = (props) => {
    
    function clickHandle(e) {
        e.preventDefault()
        console.log('clicked')
    }

    return (
        <a  onClick={clickHandle}>button</a>
    )
}

export default TestButton