<div class="enquiry_form">
<div class="enquiry_dtl">
<h2 id="Quote-For-Shift-Noida" style="color: #fff;">Get A Quote For Shift Your Vehicle And Goods.</h2>
<div class="fill_dtl">
<form  class="row" action="https://crm.rehousingpackers.in/api/insert.php"  method="POST">
                        <input type="text" name="name" id="first_name" class="form-control" placeholder="Name*" required/>
                        <input type="number" name="contactNo" id="phone" class="form-control" placeholder="Contact Number*" required/>
                        <input type="email" name="email" id="email" class="form-control" placeholder="Your Email"/> 
                        <select name="quality" id="select_service" class="selectpicker form-control" data-style="btn-white" >
                            <option value=""> Select Quality*</option>
                           <option>Expensive goods upper Quality</option>
                        <option>Average quality Local & national</option>
                        <option>Low quality only Local shifting</option>
                       
                        </select>
                            <select name="type[]" id="select_service" class="selectpicker form-control" data-style="btn-white"  multiple>
                             <option>Select Type*</option>    
                        <option>Household</option>
                        <option>Office</option>
                        <option>Two-Wheeler</option>
                        <option>Four-Wheeler</option>
                        </select>
                         
                        <input type="date" name="moveDate" id="moving_from" class="form-control" required placeholder="Moving Date*" style="height:15px"/>
                      
                        <input type="text" name="moveFrom" id="moving_from" class="form-control" placeholder="Pickup From*" required/>
                        <input type="text" name="moveTo" id="moving_to" class="form-control" required placeholder="Drop*"/>
                        
                        <input type="hidden" name="url" id="moving_to" class="form-control" value="<?php echo $link; ?>"/>
                       <!-- <input type="text" name="moving_date" id="moving_date" class="form-control" placeholder="Moving Date"/> -->
                        <textarea class="form-control" name="details" id="comments" rows="4" placeholder="Detail your moving items.."></textarea>
                        <button type="submit" value="SEND" id="submit" class="submit_btn" name="submit">Submit</button> 
                     </form>
                  </div>
               </div>
            </div>
  </div>
  </div> 