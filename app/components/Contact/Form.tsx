// Form Component that connects to Form Spark
import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useFormspark } from '@formspark/use-formspark'

// CSS + Styled-components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormCard = styled(motion.div)`
  width: 400px;
  background-color: #464646;
  border-radius: 10px / 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 400px;
  form {
    display: flex;
    flex-direction: column;
  }
`

const FormLabel = styled.label`
  font-size: 1rem;
  margin: 10px 0;
  color: white;
`

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
`

const FormTextarea = styled.textarea`
  padding: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
`

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
type FormItem = {
  formId: string
}

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [submit, submitting] = useFormspark({
    formId: 'yqLO2wzd',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await submit({ name, email, message })
      .then(() => {
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <FormContainer>
      <FormCard initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
          />
          <FormLabel>Message</FormLabel>
          <FormTextarea
            value={message}
            onChange={event => setMessage(event.target.value)}
            placeholder="Enter your message"
            required
          />
          <FormButton disabled={submitting}>Send</FormButton>
          {success && (
            <span style={{ color: 'white', fontSize: '15px', textAlign: 'center' }}>
              Message Sent! Expect a response in 24hrs
            </span>
          )}
        </form>
      </FormCard>
    </FormContainer>
  )
}

export default ContactForm
