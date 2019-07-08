module.exports = async function (req, res) {
    if (req.route.methods.get) {
        let cursos = await Curso.find()
        res.view('pages/account/selecionar-curso', {cursos})
    }
    else{
        //let {select} = req.body
        let course = await Curso.findOne({nome: req.body.select})
        await User.update({id : req.me.id}).set({curso: course.id})
        res.redirect('/account')
    }
};