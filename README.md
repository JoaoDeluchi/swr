### Performance 

# Deduplication 

Components with the same swr key and are rendered almost at the same time, only one network request will be made  

# Deep Comparison 

Swr compares data changes by default, if the data value ins't changed, a re-render will not be triggered

### Options 

# Suspense 

Data is always the fetch response

# revalidateOnMount, revalidateOnFocus, revalidateOnReconnect

Automatically revalidate when necessary (user controll)

# refreshInterval 

Automatically revalidate at a time interval

# shouldRetryOnError 

Automatically retry on error 

# compare(a, b)