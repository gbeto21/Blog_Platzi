import React, { Component } from 'react';

class Guardar extends Component {
    render() {
        return (
            <div>
                <h1>Guardar Tarea</h1>
                Usuario Id:
                <input type='number' />
                <br />
                <br />
                Título
                <input  />
                <br />
                <br />
                <button>
                    Guardar
                </button>
            </div>
        );
    }
}

export default Guardar;