fetch('https://jsonplaceholder.typicode.com/comments/')
      .then(response => response.json())
      .then(json => {

            //Primero comprobamos que todo funcione por separado y luego combinamos las 3 funciones
            
           /*  const commentName = json.map((comment)=>comment.name);
            console.log(commentName);
            const findUser = json.filter((user)=>user.email === 'Bernie.Bergnaum@lue.com');
            console.log(findUser); 
            const sortById = json.sort((a, b)=> b.id - a.id);
            console.log(sortById);*/
            
            const combined = json
            .sort((a, b) => b.id - a.id)
            .filter((user) => user.email === 'Bernie.Bergnaum@lue.com')
            .map((comment) => comment.name);
            console.log(combined);
      });