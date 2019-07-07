/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res){
    let cursos = await Curso.find()
    res.view('curso/index', {title: 'Curso', cursos});
  },

  create: async function (req, res){
      
  },

  read: async function (req, res){
      
  },
  
  update: async function (req, res){
      
  },

  delete: async function (req, res){
      
  },

};

