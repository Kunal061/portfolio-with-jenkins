pipeline {
    agent { label 'pop' }

    environment {
        PORT = '3000'
        HOST = '0.0.0.0'
    }

    options {
        // Abort previous running build when new build starts
        disableConcurrentBuilds()
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    def isNodeInstalled = sh(script: "command -v node || true", returnStdout: true).trim()
                    def isNpmInstalled = sh(script: "command -v npm || true", returnStdout: true).trim()
                    if (!isNodeInstalled || !isNpmInstalled) {
                        echo 'Node.js or npm not found, installing...'
                        sh '''
                          sudo apt update
                          sudo apt install -y nodejs npm
                        '''
                    } else {
                        echo 'Node.js and npm already installed'
                    }
                }
            }
        }

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Kunal061/portfolio-with-jenkins.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                // Force reinstall esbuild to fix exec format error
                sh 'npm install esbuild --force'
            }
        }

        stage('Build and Run App') {
            steps {
                sh 'npm run build'
                sh '''
                  IP=$(curl -s ifconfig.me)
                  echo "Your Next.js app will run at http://$IP:$PORT"
                  npm start
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
