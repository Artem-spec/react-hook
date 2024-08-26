export const profilerCallback = (id: any, phase: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
    console.table({
        id,
        phase,
        actualTime,
        baseTime, 
        startTime,
        commitTime
    })
  }