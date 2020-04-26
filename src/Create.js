import React from 'react';



class Create extends React.Component {
    render(){
      return (
        <div className="Create">
            <div className="Create container-fluid border border-dark rounded w-50 B" >
                <form>
                    <div class="form-group">
                        <label className="Label" for="Name">Recipe's Name</label>
                        <input type="text" class="form-control" id="Name" placeholder="Enter Name of recipe"/>
                    </div>
                    <div class="form-group">
                        <label className="Label" for="Ingredient">Recipe's Ingredient</label>
                        <textarea class="form-control" id="Ingredient" rows="15" placeholder="Enter the Ingredient of recipe"></textarea>
                    </div>
                    <div class="form-group">
                        <label className="Label" for="Photo">Recipe's Image</label>
                        <input type="file" class="form-control-file" id="Photo"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      );
    }
}

export default Create