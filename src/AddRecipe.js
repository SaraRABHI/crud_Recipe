import React from 'react';
import RecipesList from './RecipesList';

class AddRecipe extends React.Component {
   
  state={
    newRecipe:[
      {nom:"", ingredients:""}
    ]
  }
  handleChange = event => {
    this.setState({ newRecipe: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    
    const name = this.state.newRecipe.nom;
    const ingre = this.state.newRecipe.ingredients;

    this.props.onRecipeAdd({ name, ingre });

    this.setState({ newRecipe: "" });
  };
    render(){
      return (
        <div className="AddRecipe">
          <div className="modal fade" tabindex="-1" role="dialog" id="createModal">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add a Recipe</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body">
                          <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label className="Label" for="Name">Recipe's Name</label>
                        <input value={this.state.newRecipe.nom} onChange={this.handleChange}
                        type="text" class="form-control" id="Name" placeholder="Enter Name of recipe"/>
                    </div>
                    <div class="form-group">
                        <label className="Label" for="Ingredient">Recipe's Ingredient</label>
                        <textarea value={this.state.newRecipe.ingredients}  onChange={this.handleChange}
                        class="form-control" id="Ingredient" rows="5" placeholder="Enter the Ingredient of recipe"></textarea>
                    </div> 
                </form>
                          </div>
                          <div className="modal-footer">
                          <button type="submit" class="btn btn-primary" 
                          
                          >Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
                      
            
                 

      );
    }
}

export default AddRecipe;