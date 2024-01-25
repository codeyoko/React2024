

##Prettier and eslint config

1.create new file:
.editorconfig (install editorconfig for VS Code)
	[*]
	indent_style = space
	indent_size = 4   // space
	
2.create new file: 
.prettierrc
    {
		"arrowParens: "avoid",
		"semi": true,
		....
	}
.prettierignore
  yarn.lock  // setting in .prettierrc file no anh huong
  
3. install devDependencices for support prettier and eslint
	npm i prettier eslint-plugin-prettier eslint-config-prettier -D
	
4.create new file
.eslintrc
	{
		"extends": ["react-app", "prettier"],
		"plugins": ["react", "prettier"],
		"reles": {
			"prettier/prettier":[
				"warn",
				{
					"arrowParens: "avoid",
					"semi": true,
					....
				
				}
			
			]
		}
	}
5. config scripts for package.json

	"lint": "eslint --ext js,jsx src/",
	"lint:fix": "eslint --fix --ext js,jsx src/",
	"prettier": "prettier --check \"src/**/(**.jsx|*.js|*.scss|*.css)\"",
	"prettier:fix: "prettier --write \"src/**/(**.jsx|*.js|*.scss|*.css)\""


