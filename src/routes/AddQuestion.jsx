import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

const AddQuestion = () => {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`질문: ${question} 답변: ${answer}`)
  }
  
  return (
    <div style={{width: 335}}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="question">질문: </Label>
          <Input className="input-q" required placeholder="면접 질문을 입력해주세요." id="question" type="text" onBlur={(e) => setQuestion(e.target.value)} />
        </FormGroup>
        <FormGroup >
          <Label for="answer">답변:</Label>
          <Input className="input-a" required placeholder="질문에 대한 답변을 입력해주세요." id="answer" type="textarea" onBlur={(e) => setAnswer(e.target.value)} />          
        </FormGroup>
        <Button className="submit-btn">등록</Button>
      </Form>
    </div>
  );
};

export default AddQuestion;