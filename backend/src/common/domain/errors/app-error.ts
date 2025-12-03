export class AppError extends Error {

  public readonly statusCode: number

  constructor(message: string, statuscode = 400){
    super(message)
    this.statusCode - statuscode
  }
}
