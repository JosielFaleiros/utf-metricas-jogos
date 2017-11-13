import BaseController from '../utils/base'
import TimeModel from '../../model/time'

export class time extends BaseController{
  constructor(){
    super(TimeModel, '_id')
  }
}