pipeline {  
    agent any  
    stages {  
        stage('Clone Repository') {
            steps {
                git 'https://github.com/apoorva-01/Next.js-Ghost-Blog'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t tech-blog-app .'
            }
        }
        stage('Deploy to VPS') {
            steps {
                sh '''
                docker save tech-blog-app > your-image.tar
                scp your-image.tar root@159.65.139.170:/techblog
                ssh root@159.65.139.170 "docker load < /techblog/your-image.tar && docker run -d --name techblog-app -p 3000:3000 techblog-app-image"
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