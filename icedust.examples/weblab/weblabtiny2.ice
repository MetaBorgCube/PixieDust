module weblabtiny2 (incremental)

//================================================================================

model

  entity Assignment (on-demand) {
    name     : String 
    question : String?
    minimum  : Float?
    deadline : Datetime?
    avgGrade : Float?    = avg(submissions.grade)
    passPerc : Float?    = count(submissions.filter(x=>x.pass))/count(submissions)
  }
  
  entity Student {
    name     : String
  }
  
  entity Submission {
    name     : String    = assignment.name + " " + student.name        (on-demand)
    answer   : String?
    deadline : Datetime? = assignment.deadline <+ parent.deadline      (default)
    onTime   : Boolean   = submitted <= deadline <+ true
    submitted: Datetime?
    baseGrade: Float?    = if(conj(children.pass)) avg(children.grade) (default)
    grade    : Float?    = baseGrade - (if(onTime) 0.0 else 1.0)       (default)
    pass     : Boolean   = grade >= (assignment.minimum<+0.0) <+ false
  }
  
  relation Submission.student    1           <-> * Student.submissions
  relation Submission.assignment 1           <-> * (ordered) Assignment.submissions
  relation Assignment.children   * (ordered) <-> ? Assignment.parent
  
  relation Submission.children   * (ordered) = 
    assignment.children.submissions.filter(x => x.student == student)
                                             <-> ? Submission.parent
  
  relation Submission.next       ? = 
    parent.children.elemAt(parent.children.indexOf(this))
                                             <-> ? Submission.previous

data

  math:Assignment{
    name = "Math"
    minimum = 6.0
    children =
      exam {
        name = "Exam"
        question = "1+1=?"
        minimum = 5.0
      },
      lab {
        name = "Practical"
        question = "1/0=?"
        minimum = 5.0
        deadline = 2017-01-14 00:00:00
      }
  }
  
  alice:Student {
    name = "Alice"
    submissions =
      mathAlice {
        assignment = math
      },
      examAlice {
        assignment = exam
        answer = "Good"
        baseGrade = 7.0
      },
      labAlice {
        assignment = lab
        answer = "Great"
        baseGrade = 8.0
        submitted = 2017-01-14 17:00:00
      }
  }
  
  bob:Student {
    name = "Bob"
    submissions =
      mathBob {
        assignment = math
      },
      examBob {
        assignment = exam
        answer = "Bad"
        baseGrade = 3.0
      },
      labBob {
        assignment = lab
        answer = "Perfect"
        baseGrade = 10.0
        deadline = 2017-01-21 00:00:00
        submitted = 2017-01-14 17:00:00
      }
  }

execute

  math.passPerc
  math.avgGrade
