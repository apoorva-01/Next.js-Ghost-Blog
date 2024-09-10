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
                sh 'docker build -t tech-blog-app .'
            }
        }
        stage('Deploy to VPS') {
            steps {
                sshagent(credentials: [env.SSH_KEY_ID]) {
                sh '''
                docker save tech-blog-app > your-image.tar
                scp your-image.tar root@159.65.139.170:/techblog
                ssh root@159.65.139.170 "docker load < /techblog/your-image.tar && docker run -d --name techblog-app -p 3000:3000 techblog-app-image"
                '''
                 }
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