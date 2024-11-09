import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import Login from './page.jsx'

jest.mock('next/router')

describe('Login Component', () => {
  it('should redirect to home on successful login', () => {
    const useRouterMock = jest.fn().mockReturnValue({
      push: jest.fn(),
    })
    useRouter.mockImplementation(useRouterMock)

    render(<Login />)

    // Simular preenchimento do formulário e envio
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })

    userEvent.type(emailInput, 'valid@email.com')
    userEvent.type(passwordInput, 'strongpassword')
    userEvent.click(submitButton)

    // Verificar se o `push` foi chamado com a rota correta
    expect(useRouterMock.push).toHaveBeenCalledWith('/home')
  })
})
