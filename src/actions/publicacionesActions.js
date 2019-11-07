import axios from 'axios'

export const traerTodos = () => async (dispatch) => {

    try {
        const respuesta = await axios.get('http://jsonplaceholder.typicode.com/posts')

        dispatch({
            type: 'TRAER_TODOS',
            payload: respuesta.data
        })
    }
    catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            // type: ERROR,
            payload: 'Algo salió mal, intente más tarde.'
        })
    }

}

// dispatch({
//     type: CARGANDO
// })