   var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true,
      headers: {
       'Access-Control-Allow-Origin': "*", 
       'Access-Control-Allow-Credentials': "true" 
      },
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.(png|jpg|svg|)$/,
            loader: 'url-loader?limit=200000'
         }
      ]
   }
}

module.exports = config;