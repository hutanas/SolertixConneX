document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const issue = document.getElementById('issue').value;
    const priority = document.getElementById('priority').value;
    
    // Generate ticket ID
    const ticketId = 'MS-' + Date.now().toString().slice(-8);
    
    // Calculate response time based on priority
    let responseTime;
    switch(priority) {
        case 'high':
            responseTime = '1-2 hours';
            break;
        case 'medium':
            responseTime = '4-6 hours';
            break;
        case 'low':
            responseTime = '24-48 hours';
            break;
        default:
            responseTime = 'TBD';
    }
    
    // Store ticket data (in real app, this would go to a backend)
    const ticketData = {
        id: ticketId,
        name: name,
        email: email,
        product: product,
        issue: issue,
        priority: priority,
        timestamp: new Date().toISOString(),
        status: 'Pending'
    };
    
    console.log('Support Ticket Created:', ticketData);
    
    // Hide form and show ticket status
    document.querySelector('.support-form').style.display = 'none';
    document.getElementById('ticketStatus').style.display = 'block';
    document.getElementById('ticketId').textContent = ticketId;
    document.getElementById('responseTime').textContent = responseTime;
    
    // Scroll to ticket status
    document.getElementById('ticketStatus').scrollIntoView({ behavior: 'smooth' });
});