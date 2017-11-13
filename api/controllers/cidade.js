import BaseController from '../utils/base'
import CidadeModel from '../../model/cidade'

export class cidade extends BaseController{
  constructor(){
    super(CidadeModel, '_id')
  }
}