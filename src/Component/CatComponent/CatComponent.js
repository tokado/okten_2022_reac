
const CatComponent = ({cat,dispatch}) => {
    return (
        <div>
            <div>
                Cat:{cat.name}
                <button onClick={()=>{{dispatch({type: 'deleteCat',payload: cat.id})}}}>Himars</button>
            </div>
        </div>

    );
};

export default CatComponent;