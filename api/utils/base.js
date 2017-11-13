//http://rvcode.com/javascript/2016/01/02/generic-crud-controller-with-mongoose-and-express.html
import { Router } from 'express'

const MAX_RESULTS = 100

export default class BaseController{
  constructor(model, key){
    this.model = model;
    this.key = key;
  }

  async create (data) {
    let newObject
    try {
      newObject = await this.model.create(data)
    } catch (err) {
      return err
    }
    return newObject
  }

  async read (id) {
    let object
    try {
      object = await this.model.findById(id)
    } catch (err) {
      return err
    }
    return object
  }

  async update (id, data) {
    let object
    try {
      object = await this.model.findOneAndUpdate({_id: id}, data)
    } catch (err) {
      return err
    }
    return object
  }

  async delete (id) {
    let object
    try {
      object = await this.model.findOneAndRemove({_id: id})
    } catch (err) {
      return err
    }
    return object
  }

  async list () {
    let list
    try {
      list = await this.model.find({}).limit(MAX_RESULTS)
    } catch (err) {
      return err
    }
    return list
  }

  route () {
    const router = new Router()

    router.post("/", async (req, res) => {
      res.json(await this.create(req.body))
    })

    router.get("/:key", async (req, res) => {
      res.json(await this.read(req.params.key))
    })

    router.put("/:key", async (req, res) => {
      res.json(await this.update(req.params.key, req.body))
    })

    router.get("/", async (req, res) => {
      res.json(await this.list())
    })

    return router
  }

}