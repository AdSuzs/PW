/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res){
    let cursos = await Curso.find()
    res.view('curso/index', {cursos})
  },

  create: async function (req, res){
      try{     
        await Curso.create({
          nome: req.body.nome,
          sigla: req.body.sigla,
          descricao: req.body.descricao
        }); 
        console.log(req.body)   
        res.redirect('/curso');
      }
      catch(err){
        console.log(err);
      }    
  },

  read: async function (req, res){
      
  },
  
  update: async function (req, res){
     let cursos = await Curso.update({id:'Carlos'}).set({idade: 30})
     res.view('curso/index', {title: 'Curso', cursos})
  },

  delete: async function (req, res){
    let cursos = await Curso.destroy({id:req.me.id})
    res.view('curso/index', {title: 'Curso', cursos})
  },

};

