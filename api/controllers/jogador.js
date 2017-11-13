import BaseController from '../utils/base'
import JogadorModel from '../../model/jogador'

export class jogador extends BaseController{
  constructor(){
    super(JogadorModel, '_id')
  }
}