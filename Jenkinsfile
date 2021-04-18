pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/csmper/react-app.git', branch: 'develop', changelog: true)
      }
    }

    stage('sonarqube') {
      environment {
        scannerHome = tool 'sonarqubescanner'
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          bat "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }  
}