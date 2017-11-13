import BaseController from '../utils/base'
import SumulaModel from '../../model/sumula'

export class sumula extends BaseController{
  constructor(){
    super(SumulaModel, '_id')
  }
}