import React from 'react';
import Back from './C.jpg';
import {Image} from 'react-bootstrap'

// Modal


import { Button, Row, Container, Col, Modal, Form } from 'react-bootstrap'


class RecipesList extends React.Component {
  state = {
    Recipes: [
      
    ],
    newRecipe: { nom: "", ingredients: "" },
    currentRecipe: { id: undefined, nom: "", ingredients: "" },
    modalShow: false,
    modalAdd: false,
    modalEdit: false,
    isLoading : true
    
  }

  

  /*componentWillMount(){
    const localRef
    if(storageAvailable('localStorage')){
      localRef = localStorage.setItem('Recipes',JSON.stringify(this.state.Recipes));
    }
    if(localRef){
      this.setState({
        Recipes : JSON.parse(localRef)
      })
    }
    else{
      console.error("Your browser doesn\'t support local storage");
    }
  }

  /*componentDidMount(){
    
    if(!localStorage.getItem('Recipes')){
      this.fetchData();
    }
    else{
      console.log("Using Data from Local Storage");
    }
  }*/

  /*componentWillUpdate(nextProps, nextState){
    if(storageAvailable('localStorage')){
      const ref = localStorage.setItem('Recipes',JSON.stringify(nextState.Recipes));
    }
    else{
      console.error("Your browser doesn\'t support local storage");
    }
  }*/

  handleDelete = (id) => {
    const recipes = [...this.state.Recipes];
    
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    this.setState({
      ...this.state,
      Recipes: newRecipes
    });

    // close modal
    this.handleClose()
  }


  handleAdd = () => {
    const last = Date.now();

    // hide modal
    const recipes = [...this.state.Recipes];
    

    const recipeToAdd = this.state.newRecipe;

    recipeToAdd['id'] = `recipe${last}`
    
    recipes.push(recipeToAdd);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    this.setState({
      Recipes: recipes,
      modalAdd: false,
      newRecipe: {nom: '', ingredients: ''}
    });

  }

  handleEditName = (nom, id) => {
    
    const recipes = [...this.state.Recipes];
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({
      id: id,
      nom: this.state.currentRecipe.nom,
      ingredients: recipes.ingredients
    })

  }

  handleEditIngredient = (ingredients, id) => {
    
    const recipes = [...this.state.Recipes];
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({
      id: id,
      nom: recipes.nom,
      ingredients: this.state.currentRecipe.nom
    })

  }

  handleChange = (event) => {
    const value = event.currentTarget.value;
    
    this.setState({ newRecipe: value });

  }

  handleClose = () =>{
    
    this.setState((state) => {
      return {
        ...state,
        modalShow: false,
        modalEdit: false
      }
    });
  } 

  handleEditClose = () => {
    
    this.setState((state) => {
      return {
        ...state,
        modalEdit: false
      }
    });
  } 

  handleAddClose = () =>{
    
    this.setState((state) => {
      return {
        ...state,
        modalAdd: false
      }
    });
  } 

  handleShow = (id) => {
    // get recipe by id
    const recipe = this.state.Recipes.find((recipe) => recipe.id === id);
    console.log(recipe);

    

    // set current recipe to show & show modal
    this.setState((state) => {
      return {
        ...state,
        modalShow: true,
        currentRecipe: {
          id: id,
          nom: recipe.nom,
          ingredients: recipe.ingredients
        }
      }
    })
  };

  handleEdit = (event,id) =>{

    
    const last = Date.now();
    const recipes = [...this.state.Recipes];

    const recipeToEdit = this.state.currentRecipe;

    recipeToEdit['id'] = `recipe${last}`
    
    recipes.push(recipeToEdit);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    this.setState({
      Recipes : recipes,
      modalEdit: false
      
    });

    
    
    const currentRecipes = recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    this.setState({
      ...this.state,
      Recipes: currentRecipes
    });

    // close modal
    this.handleClose()
  }

  getRecordsFromLocalStorage = () => {
    let recs = localStorage.getItem('recipes');
    let recsParsed = JSON.parse(recs);
    return recsParsed;
  }

  componentDidMount(){
    let Recipes = JSON.parse(localStorage.getItem("Recipes")) || [];
    this.setState({Recipes:this.getRecordsFromLocalStorage()});
  }


  

  render() {


    return (
      <div id="recipe">
      
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{this.state.currentRecipe.nom}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.currentRecipe.ingredients}</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={() => this.setState({...this.state, modalEdit: true})} >
                Update
            </Button>
            <Button variant="danger" onClick={() => this.handleDelete(this.state.currentRecipe.id)}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
      <Container>
        <Row>
          <Col className="p-4">
            <Button
              onClick={() => this.setState({...this.state, modalAdd: true})}
              variant="success" 
              className="float-right d-block">Add recipe</Button>
          </Col>
        </Row>

        

        <Modal show={this.state.modalAdd} onHide={this.handleAddClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="recipeName">
              <Form.Label>Recipe's Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Name of recipe" 
                value={this.state.newRecipe.nom} 
                onChange={(e) => this.setState({newRecipe: {...this.state.newRecipe, nom: e.target.value}})}
                />
            </Form.Group>

            <Form.Group controlId="recipeIngredients">
              <Form.Label>Recipe's Ingredient</Form.Label>
              <Form.Control 
                onChange={(e) => this.setState({newRecipe: {...this.state.newRecipe, ingredients: e.target.value}})}
                as="textarea" 
                rows="4" 
                placeholder="Enter the Ingredient of recipe" 
                value={this.state.newRecipe.ingredients}/>
            </Form.Group>
          </Modal.Body>
              <div className="modal-footer">
                <button type="submit" class="btn btn-primary"
                  onClick={() => this.handleAdd()}
                >Submit</button>
              </div>
        </Modal>

        <Modal show={this.state.modalEdit} onHide={this.handleEditClose} >
        <Modal.Header closeButton>
          <Modal.Title>Edit a recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="recipeName" >
            <Form.Label>Recipe's Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Name of recipe" 
              value={this.state.currentRecipe.nom} 
              onChange={(e) => this.setState({currentRecipe: {...this.state.currentRecipe, nom: e.target.value}})}
              />
          </Form.Group>

          <Form.Group controlId="recipeIngredients" >
            <Form.Label>Recipe's Ingredient</Form.Label>
            <Form.Control 
              onChange={(e) => this.setState({currentRecipe: {...this.state.currentRecipe, ingredients: e.target.value}})}
              as="textarea" 
              rows="4" 
              placeholder="Enter the Ingredient of recipe" 
              value={this.state.currentRecipe.ingredients}/>
          </Form.Group>
        </Modal.Body>
            <div className="modal-footer">
              <button type="submit" class="btn btn-primary"
                onClick={(e) => {
                  
                  this.handleEdit(e,this.state.currentRecipe.id)
                  
                }}
              >Submit</button>
            </div>
      </Modal>
        <Row>
        
        {
          //this.state.Recipes!= null?
            <div>{
              this.state.Recipes.map((recipe)  => {
                
                  return (
                  <div class="col-md-6 text-center mb-3">
                    <div class="card">
                      <div
                        onClick={this.handleShow.bind(this, recipe.id)}
                        class="card-body text-primary" 
                        style={{cursor: 'pointer'}}>
                        {recipe.nom}
                      </div>
                    </div>
                  </div>
                );
              
            
              
              
            })
  }</div>
            //:

            //<h1 className="text-center">You dont have any resipe</h1>
            
            
  }
          
          
        </Row>
      </Container>
      </div>
    );
  }
}

export default RecipesList