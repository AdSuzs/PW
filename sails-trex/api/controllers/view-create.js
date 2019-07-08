module.exports = {


    friendlyName: 'View create curso',
  
  
    description: 'Tela onde o usuario coloca as informacoes para criar um curso',
  
    exits: {
      success: {
        viewTemplatePath: 'curso/create'
      }
    },
  
  
    fn: async function (inputs) {
      return {
        title: 'Criar Curso'
      };
    }
  };