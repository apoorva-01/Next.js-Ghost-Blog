pipeline {  
    agent any  
     environment {
        SSH_KEY_ID = 'vps-ssh-key' // The ID you set in the credentials manager
    }
    stages {  
        stage('Clone Repository') {
            steps {
                git credentialsId: 'apoorva01-github', branch: 'main', url: 'https://github.com/apoorva-01/Next.js-Ghost-Blog.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                  sh '''
                  docker build -t techblog-app .
                  docker run -p 3000:3000 techblog-app
                  '''
            }
        }
            stage ('Test') {  
              steps{
                    echo "testing the application"
                }
            }  
            stage ('QA') {  
                steps{
                    echo "OA analysis of the application"
                }
            }  
            stage ('Deploy') {  
                steps{
                    echo "Deploying the application"
                }
            }  
            stage ('Monitor') {  
                steps{
                    echo "Monitoring the application"
                }
            }  
    }  
}  