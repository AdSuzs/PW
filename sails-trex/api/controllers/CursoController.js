/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res){
    let cursos = await Curso.find()
    res.view('curso/index', {title: 'Curso', cursos})
  },

  create: async function (req, res){
    res.view('curso/create')
    if(){
      try{
        console.log(req.body);      
        let {nome, sigla, descricao} = req.body
        let cria = {nome, sigla, descricao}
        let resultado = await Curso.create(cria)    
        res.redirect('/curso');
      }
      catch(err){
        console.log(err);
      }
    }    
  },

  read: async function (req, res){
      
  },
  
  update: async function (req, res){
     let cursos = await Curso.update({id:'Carlos'}).set({idade: 30})
     res.view('curso/index', {title: 'Curso', cursos})
  },

  delete: async function (req, res){
    let cursos = await Curso.destroy({id:'Carlos'})
    res.view('curso/index', {title: 'Curso', cursos})
  },

};

