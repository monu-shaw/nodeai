## Node.js AI App with Llama-cpp

This repository provides a boilerplate project for building an AI-powered application using Node.js and the `node-llama-cpp` library.

### Getting Started

1. **Prerequisites:**
    * Node.js and npm (or yarn) package manager installed on your system.
    * A decent amount of RAM (ideally 16GB or more) is recommended for smooth operation with larger LLM models.

2. **Clone the Repository:**

```bash
git clone https://github.com/monu-shaw/nodeai.git
```

3. **Install Dependencies:**

```bash
cd nodeai
npm install
``` (or `yarn install`)
```

4. **Download the LLM Model:**

* Head over to resources like Hugging Face Model Hub to explore compatible LLM models. Consider factors like model size and hardware requirements when choosing your model. 
* Download the chosen model file (usually in GGUF format) and place it in a designated folder within your project (e.g., `models`).

**Note:** Make sure the model path in your code points to the correct location of the downloaded model file.

### Running the Application

1. Open your terminal and navigate to the project directory.

2. Execute the script:

```bash
node app.mjs
``` (or `yarn start` if you have a defined start script in `package.json`)
```
**This will start your Node.js application, ready to interact with the LLM.**

### Project Structure

The project structure typically includes:

* `app.js`: Main application script containing code for interacting with the LLM.
* `package.json`: File containing project information and dependencies.


### Usage Example

The `app.mjs` script should demonstrate how to interact with the LLM through functions like:

* Initializing the LLM engine using `node-llama-cpp`.
* Sending prompts (text input) to the LLM.
* Receiving and processing the LLM's generated responses. 

**You can modify and expand upon this basic functionality to create your own AI-powered application.**

### Contributing

I welcome contributions to this project! Feel free to fork the repository, make changes, and submit a pull request.

### License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the `LICENSE` file for details.