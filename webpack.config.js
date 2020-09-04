const currentTask = process.env.npm_lifecycle_event //get current task from npm eg build dev
const path = require('path') //file directories module
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')//better filesystem management 


class RunAfterCompile { 
	
	apply(complier) {
		
		complier.hooks.done.tap('copy images', function() {
			
			fse.copySync('./client/assets/images', './docs/assets/images')//copy img files from from dev to build folders.
   
			
		})
  
  complier.hooks.done.tap('copy docs', function() {
			
		fse.copySync('./client/assets/documents', './docs/assets/documents')//copy doc files from from dev to build folders.
   
			
		})
		
  
  
		
	}
	
	
}

let cssConfig = {// set config for css module.exports
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader,'css-loader?url=false']
      }
	  
	  let pages = fse.readdirSync('./client').filter(function(file){// find all html documents in the client folder
		  return file.endsWith('.html')                             
		  }).map(function(page){ // for each page return new htmlwebpack tempalte
			  return new HtmlWebpackPlugin({
			  filename: page,
			  template: `./client/${page}`
			  })
		  })

let config = {// build module.exports
	entry: './client/assets/scripts/index.js',
	plugins: pages,
	module: {
    rules: [
      cssConfig
    ]
  }
	
}

if (currentTask == "dev"){
 
	config.output =  {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'client')
  },
  config.devServer = {
    before: function(app, server) {
      server._watch('./client/**/*.html')
    },
	
	contentBase: path.join(__dirname, 'client'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  config.mode = 'development'
  
  config.plugins.push( 
  new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}))
	
	
}

if (currentTask == "build"){
	config.module.rules.push({ 
	test: /\.js$/, 
	exclude: /(node_modules)/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env']
		}
		
		
	}
	})
	
	config.output =  {
    filename: '[name].[chunkhash].js',
	chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs')
  },
  config.mode = 'production',
  config.optimization = {
	  splitChunks: { chunks: "all" }
  
  },
  
  config.plugins.push( 
  new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
  new RunAfterCompile()
  )
	
}

 

module.exports = config