package com.example.casestudy.entities;

import javax.persistence.*;

@Entity
@Table(name = "tbl_claims")
public class Claim
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Lob
    private byte[] data;
    private String extension;
    private boolean isClaimApproved;
    private boolean isClosed;

    public Claim()
    {

    }
    public Claim(int id, byte[] data, String extension, boolean isClaimApproved, boolean isClosed)
    {
        this.id = id;
        this.data = data;
        this.extension = extension;
        this.isClaimApproved = isClaimApproved;
        this.isClosed = isClosed;
    }

    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }

    public byte[] getData()
    {
        return data;
    }
    public void setData(byte[] data)
    {
        this.data = data;
    }

    public String getExtension()
    {
        return extension;
    }
    public void setExtension(String extension)
    {
        this.extension = extension;
    }

    public boolean isClaimApproved()
    {
        return isClaimApproved;
    }
    public void setClaimApproved(boolean claimApproved)
    {
        isClaimApproved = claimApproved;
    }

    public boolean isClosed()
    {
        return isClosed;
    }
    public void setClosed(boolean closed)
    {
        isClosed = closed;
    }
}
