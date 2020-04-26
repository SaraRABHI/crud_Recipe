import React from 'react';
import Back from './C.jpg';
 


class ReadRecipe extends React.Component {
    render(){
        return(
            <div className="ReadRecipe">
                {this.props.Recipes.map((Recipe)=>{
                return(
                    <div className="modal fade" tabindex="-1" role="dialog" id="readModal">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content" id={Recipe.nom}>
                              <div className="modal-header">
                                <h5 className="modal-title">{Recipe.nom}</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                <p>{Recipe.ingredients}</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-warning"
                                
                                >Update</button>
                                <button type="button" className="btn btn-danger" 
                                onClick={()=>this.handleDelete(Recipe.nom)}>Delete</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
            
            
          )
        })};


    }</div>
            
        );
        
}}

export default ReadRecipe





