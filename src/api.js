export const getItem = () => new Promise((res) => {
    setTimeout(() => res(
        {
            nombre: 'Argentina',
            descripcion: 'Camiseta titular de la selección argentina para el mundial de Qatar 2022',
            precio: '$10.000'
        }
    ), 2000)
})