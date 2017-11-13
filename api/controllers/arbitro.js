import BaseController from '../utils/base'
import ArbitroModel from '../../model/arbitro'

export class arbitro extends BaseController{
  constructor(){
    super(ArbitroModel, '_id')
  }
}