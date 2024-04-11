import { UsersController } from "../controllers/usersController"
import { makeMockResponse } from "../mocks/mockResponse"
import { Request } from 'express';

describe ('Users Controller', ()=>{
 
  const usersController = new UsersController()

  const mockRequest = {} as Request
  const mockResponse = makeMockResponse()
  it('Should list all users', ()=>{
    usersController.getAllUsers(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).not.toHaveLength(0)
  })

  it('Should create a new user', ()=>{

    mockRequest.body = {
      name: 'new user'
    }

    usersController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({'mensagem': `User new user created!`})

  })
})