pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'rm -rf build'
                sh 'mkdir build'
                sh 'touch build/car.txt'
                sh 'echo "chassis">build/car.txt'
                sh 'docker images'
            }
        }
        stage('Test') {
            steps {
                sh 'test -f  build/car.txt'
                sh 'grep "chassis" build/car.txt'
            }
        }
        
       stage('Publish') {
            steps {
             archiveArtifacts artifacts: 'build/'   
            }
        }
    }
}
